package com._hackaton._back.repository;

import com._hackaton._back.domain.JobPosting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobPostingRepository extends JpaRepository<JobPosting, Long> {
    @Query("SELECT j FROM JobPosting j WHERE "
            + "(:isEmptyCity = true OR j.city IN :city) AND "
            + "(:isEmptySector = true OR j.sector IN :sector) AND "
            + "(:minSalary IS NULL OR j.salary >= :minSalary) AND "
            + "(:maxSalary IS NULL OR j.salary <= :maxSalary) AND "
            + "(:isFoodProvided IS NULL OR j.isFoodProvided = :isFoodProvided) AND "
            + "(:isAccommodationProvided IS NULL OR j.isAccommodationProvided = :isAccommodationProvided)")
    List<JobPosting> findJobs(@Param("city") List<String> city,
                              @Param("isEmptyCity") boolean isEmptyCity,
                              @Param("sector") List<String> sector,
                              @Param("isEmptySector") boolean isEmptySector,
                              @Param("minSalary") Integer minSalary,
                              @Param("maxSalary") Integer maxSalary,
                              @Param("isFoodProvided") Boolean isFoodProvided,
                              @Param("isAccommodationProvided") Boolean isAccommodationProvided);

}
