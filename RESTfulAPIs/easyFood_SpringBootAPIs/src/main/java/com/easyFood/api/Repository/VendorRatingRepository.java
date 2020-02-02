package com.easyFood.api.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.easyFood.api.entity.VendorRating;

public interface VendorRatingRepository extends CrudRepository<VendorRating, Long> {

	List<VendorRating> findByVendorId(Long vendorId);
}
