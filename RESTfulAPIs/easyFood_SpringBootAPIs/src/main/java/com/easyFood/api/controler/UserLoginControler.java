package com.easyFood.api.controler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.SortedMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.easyFood.api.EasyFoodApplication;
import com.easyFood.api.Repository.AdminRepository;
import com.easyFood.api.Repository.UserRepository;
import com.easyFood.api.Repository.VendorRepository;
import com.easyFood.api.entity.Admin;
import com.easyFood.api.entity.User;
import com.easyFood.api.entity.Vendor;
import com.easyFood.api.lib.LoginResponse;
import com.easyFood.api.lib.TokenGenerator;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserLoginControler {

	private static final Logger logger = LoggerFactory.getLogger(EasyFoodApplication.class);
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private VendorRepository vendorRepository;

	@Autowired
	private AdminRepository adminRepository;
	
	private TokenGenerator tokenGenerator = new TokenGenerator();
	
	@PostMapping("/users/login")
	@ResponseBody
	public LoginResponse login(@RequestParam String email, @RequestParam String password) {
		LoginResponse response = null;
		List<User> users = userRepository.findByUserEmail(email);
		Map<String, String> hm = new HashMap<String, String>();

		if (users.size() > 0) {
			User user = users.get(0);
			if (user.getUserPassword().equals(tokenGenerator.getToken(password))) {
				response = new LoginResponse(true, "loged in");
				hm.put("id", user.getUserId().toString());
				hm.put("name", user.getUserName());
				hm.put("email", user.getUserEmail());
				hm.put("phone", user.getUserPhone().toString());
				hm.put("organisationId", user.getUserOrgId().toString());
				hm.put("organisationName", user.getUserOrg());
				hm.put("token",tokenGenerator.getToken(user.getUserId()+user.getUserEmail()));
				response.setResult(hm);
			} 
			else {
				response = new LoginResponse(false, "Invalid UserId/Password");
				response.setResult(null);
			}
		}
		else {
			response = new LoginResponse(false, "Invalid UserId/Password");
			response.setResult(null);
		}

		return response;
	}

	@PostMapping("/vendors/login")
	@ResponseBody
	public LoginResponse loginVendor(@RequestParam String email, @RequestParam String password) {
		LoginResponse response = null;
		List<Vendor> vendors = vendorRepository.findByVendorEmail(email);
		Map<String, String> hm = new HashMap<String, String>();

		if (vendors.size() > 0) {
			Vendor vendor = vendors.get(0);
			if (vendor.getVendorPassword().equals(tokenGenerator.getToken(password))) {
				response = new LoginResponse(true, "loged in");
				hm.put("id", vendor.getVendorId().toString());
				hm.put("name", vendor.getVendorName());
				hm.put("email", vendor.getVendorEmail());
				hm.put("phone", vendor.getVendorPhone().toString());
				hm.put("organisationId", vendor.getVendorOrgId().toString());
				hm.put("organisationName", vendor.getVendorOrg());
				hm.put("token",tokenGenerator.getToken( vendor.getVendorId()+vendor.getVendorEmail()));
				response.setResult(hm);
			} 
			else {
				response = new LoginResponse(false, "Invalid UserId/Password");
				response.setResult(null);
			}
		}
		else {
			response = new LoginResponse(false, "Invalid UserId/Password");
			response.setResult(null);
		}

		return response;
	}
	
	@PostMapping("/admins/login")
	@ResponseBody
	public LoginResponse loginAdmin(@RequestParam() String email, @RequestParam String password) {
		LoginResponse response = null;
		
		List<Admin> admins = adminRepository.findByAdminEmail(email);
		//Integer size = admins.size();
		//logger.info(size.toString());
		Map<String, String> hm = new HashMap<String, String>();

		if (admins.size() > 0) {
			Admin admin = admins.get(0);
			if (admin.getAdminPassword().equals(tokenGenerator.getToken(password))) {
				response = new LoginResponse(true, "loged in");
				hm.put("id", admin.getAdminId().toString());
				hm.put("name", admin.getAdminName());
				hm.put("email", admin.getAdminEmail());
				hm.put("phone", admin.getAdminPhone().toString());
				hm.put("organisationId", admin.getAdminOrgId().toString());
				hm.put("organisationName", admin.getAdminOrg());
				hm.put("token",tokenGenerator.getToken( admin.getAdminId()+admin.getAdminEmail()));
				response.setResult(hm);
			} 
			else {
				response = new LoginResponse(false, "Invalid UserId/Password");
				response.setResult(null);
			}
		}
		else {
			//logger.info("in else");
			response = new LoginResponse(false, "Invalid UserId/Password");
			response.setResult(null);
		}

		return response;
	}
}
