package com.easyFood.api.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.easyFood.api.entity.Admin;

public interface AdminRepository extends CrudRepository<Admin, Long> {

	List<Admin> findByAdminEmail(String adminEmail);
	List<Admin> findByAdminId(Long adminId);
	
	
}
