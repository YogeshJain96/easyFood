package com.easyFood.api.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.easyFood.api.entity.RechargeHistory;
import com.easyFood.api.entity.User;

public interface RechargeHistoryRepository extends CrudRepository<RechargeHistory, Long> {

	List<RechargeHistory> findByUser(User user);
}
