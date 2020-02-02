package com.easyFood.api.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.easyFood.api.entity.User;
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

	List<User> findByUserEmail(String userEmail);
	
}
