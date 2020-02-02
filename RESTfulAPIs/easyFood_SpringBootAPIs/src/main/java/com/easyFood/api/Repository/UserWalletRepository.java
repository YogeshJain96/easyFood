package com.easyFood.api.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.easyFood.api.entity.User;
import com.easyFood.api.entity.UserWallet;
@Repository
public interface UserWalletRepository extends CrudRepository<UserWallet, Long> {
	
	List<UserWallet> findByUserId(Long userId);
	
}
