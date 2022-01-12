package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.enteties.Score;
import com.devsuperior.dsmovie.enteties.ScorePk;

public interface ScoreRepository extends JpaRepository<Score, ScorePk> {
	
}
