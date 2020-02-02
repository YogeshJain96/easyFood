package com.easyFood.api.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.easyFood.api.entity.Vendor;

public interface VendorRepository extends CrudRepository<Vendor, Long> {

	List<Vendor> findByVendorEmail(String vendorEmail);
	
}
