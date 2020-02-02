package com.easyFood.api.controler;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.easyFood.api.EasyFoodApplication;
import com.easyFood.api.Repository.VendorRatingRepository;
import com.easyFood.api.Repository.VendorRepository;
import com.easyFood.api.entity.Vendor;
import com.easyFood.api.entity.VendorRating;
import com.easyFood.api.lib.ListResponse;
import com.easyFood.api.lib.Respone;
import com.easyFood.api.lib.VendorsListResponse;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class VendorsController {

	@Autowired
	VendorRepository vendorRepository;

	@Autowired
	VendorRatingRepository vendorRatingRepository;
	
	private static final Logger logger = LoggerFactory.getLogger(EasyFoodApplication.class);

	@GetMapping("/vendors/list")
	@ResponseBody
	public ListResponse<VendorsListResponse> vendorsList() {
		List<Vendor> vendors = (List<Vendor>) vendorRepository.findAll();
		List<VendorsListResponse> vendorsResponse = new ArrayList<>();
		for (Vendor vendor : vendors) {
			logger.info(vendor.getVendorName());
			vendorsResponse.add(new VendorsListResponse(vendor.getVendorId(), vendor.getVendorEmail(), vendor.getVendorName(),
					vendor.getVendorPhone(), vendor.getVendorOrgId(), vendor.getVendorOrg()));
			
		}
		ListResponse<VendorsListResponse> response = new ListResponse<>(true,"Vendors list",vendorsResponse);
		return response;
	}
	
	@PostMapping("/vendors/rating")
	@ResponseBody
	public Respone updateVendorRating(@RequestParam Long vendorId,@RequestParam int rating) {
		List<VendorRating> vendorRatings = vendorRatingRepository.findByVendorId(vendorId);
		if(vendorRatings.size()>0) {
			VendorRating vendorRating = vendorRatings.get(0);
			vendorRating.setVendorRarting(rating);
			vendorRatingRepository.save(vendorRating);
			return new Respone(true,"rating updated");
		}
		else {
			return new Respone(false,"no vendor with given Id");
		}
		
	}
	
	
}
