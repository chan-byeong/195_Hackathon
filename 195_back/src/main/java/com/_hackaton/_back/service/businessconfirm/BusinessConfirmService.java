package com._hackaton._back.service.businessconfirm;

import com._hackaton._back.dto.BusinessConfirmDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpException;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;


@Service
public class BusinessConfirmService {
    /**
     *  open api url 호출
     * @param
     * @return
     */

    public String BusinessConfirmApiRequest (BusinessConfirmDto data) throws Exception
    {
        int statusCode = 0;
        String url = "http://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=Hxut7rcehsBBuNAHB1ei0TgGuEEqnxuhYhpQmlVc5ArPxtQyOp8KRicvyRFlaW1jH4OKBpoTn4uDURU%2F8WDqig%3D%3D";

        CloseableHttpClient httpclient = HttpClientBuilder.create().build();
        HttpPost httpPost = new HttpPost(url);

        String bNo = data.getBNo();  //사업자등록번호(필수)
        String pNm = data.getPNm();  //대표자성명(필수)
        String startDt = data.getStartDt();  //개업일자(필수)


        String json = "{\"businesses\": [ { \"b_no\":\"" +bNo + "\","; //사업자등록번호(필수)
        json += "\"start_dt\":\"" +startDt + "\","; //개업일자(필수)
        json += "\"p_nm\":\"" +pNm + "\""; //대표자성명(필수)
        json += "}]}";


        StringEntity requestEntity = new StringEntity(json , "utf-8");

        httpPost.addHeader("content-type","application/json");
        httpPost.addHeader("Accept","application/json");
        httpPost.setEntity(requestEntity);

        HttpResponse response = httpclient.execute(httpPost);
        statusCode = response.getStatusLine().getStatusCode();

        if( statusCode == 200){
            // 정상인 경우 메시지를 읽어 들여 그 결과를 리턴한다.
            BufferedReader rd = new BufferedReader( new InputStreamReader(response.getEntity().getContent()));
            StringBuffer result = new StringBuffer();
            String line = "";
            while ((line = rd.readLine()) != null) {
                result.append(line);
            }

            return BusinessConfirm(result.toString());
        }


        if( statusCode != 200)
        {
            throw new HttpException((new StringBuilder("오류가 발생하였습니다.")).append(statusCode).toString());
        }

        return "";

    }

    private String BusinessConfirm(String data) throws JsonProcessingException {
        // ObjectMapper 생성
        ObjectMapper objectMapper = new ObjectMapper();

        // JSON 파싱
        JsonNode jsonNode = objectMapper.readTree(data);

        // "valid" 필드 값 추출
        String validValue = jsonNode.get("data").get(0).get("valid").asText();


        return validValue;

    }
}
