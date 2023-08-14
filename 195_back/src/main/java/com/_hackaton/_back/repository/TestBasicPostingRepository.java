package com._hackaton._back.repository;

import com._hackaton._back.domain.TestBasicPosting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestBasicPostingRepository extends JpaRepository<TestBasicPosting, Long> {
}
