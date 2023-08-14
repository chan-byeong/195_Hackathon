package com._hackaton._back.repository;

import com._hackaton._back.domain.TestPosting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestPostingRepository extends JpaRepository<TestPosting, Long>{
}
