package com.easyFood.api.controler;

import java.util.List;

import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.easyFood.api.EasyFoodApplication;
import com.easyFood.api.Repository.AdminRepository;
import com.easyFood.api.Repository.UserRepository;
import com.easyFood.api.Repository.UserWalletRepository;
import com.easyFood.api.Repository.VendorRatingRepository;
import com.easyFood.api.Repository.VendorRepository;
import com.easyFood.api.entity.Admin;
import com.easyFood.api.entity.User;
import com.easyFood.api.entity.UserWallet;
import com.easyFood.api.entity.Vendor;
import com.easyFood.api.entity.VendorRating;
import com.easyFood.api.lib.LoginResponse;
import com.easyFood.api.lib.RegisterResponse;
import com.easyFood.api.lib.Respone;
import com.easyFood.api.lib.TokenGenerator;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserRegisterControler {

	@Autowired
	UserWalletRepository userWalletRepository;

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	VendorRatingRepository vendorRatingRepository;

	@Autowired
	VendorRepository vendorRepository;
	
	@Autowired
	AdminRepository adminRepository;

	TokenGenerator tokenGenerator = new TokenGenerator();
	private static final Logger logger = LoggerFactory.getLogger(EasyFoodApplication.class);

	@PostMapping("/users/register")
	@ResponseBody
	public RegisterResponse register(@RequestBody User user) {
		user.setUserPassword(tokenGenerator.getToken(user.getUserPassword()));
		UserWallet userWallet = new UserWallet(0.0);
		userWallet.setUser(user);
		try {
			userWallet = userWalletRepository.save(userWallet);
			return new RegisterResponse(true, "Registered", userWallet.getUserId());
		} catch (Exception e) {
			// TODO: handle exception
			logger.info(e.getClass().getName());
			if (e.getClass() == DataIntegrityViolationException.class) {
				return new RegisterResponse(false, "user already registered", 0L);
			}

			return new RegisterResponse(false, "Some error occured", 0L);
		}

	}

	@PostMapping("/user/changePassword")
	@ResponseBody
	public Respone userChangePassword(@RequestParam String userEmail, @RequestParam String newPassword,
			@RequestParam String oldPassword) {
		List<User> users = userRepository.findByUserEmail(userEmail);
		if(users.size()>0) {
			User user = users.get(0);
			if(user.getUserPassword().equals(tokenGenerator.getToken(oldPassword))) {
				user.setUserPassword(tokenGenerator.getToken(newPassword));
				try {
					userRepository.save(user);
					return new Respone(true, "Password Change Successful");
				} catch (Exception e) {
					// TODO: handle exception
					return new Respone(false, "Some error occured");
				}
				
			}
			else {
				
				return new Respone(false, "Incorrect Password");
				
			}
		}
		else {
			
			return new Respone(false, "Invalid UserEmail");
			
		}
		
	}

	@PostMapping("/vendors/register")
	@ResponseBody
	public RegisterResponse registerVendor(@RequestBody Vendor vendor) {
		vendor.setVendorPassword(tokenGenerator.getToken(vendor.getVendorPassword()));
		VendorRating vendorRating = new VendorRating(vendor.getVendorName(), 1);
		vendorRating.setVendor(vendor);
		try {
			vendorRating = vendorRatingRepository.save(vendorRating);
			return new RegisterResponse(true, "Registered", vendorRating.getVendorId());

		} catch (Exception e) {
			// TODO: handle exception
			if (e.getClass() == DataIntegrityViolationException.class) {
				return new RegisterResponse(false, "vendor already registered", 0L);
			}

			return new RegisterResponse(false, "Some error occured", 0L);
		}
	}

	@PostMapping("/vendor/changePassword")
	@ResponseBody
	public Respone vendorChangePassword(@RequestParam String vendorEmail, @RequestParam String newPassword,
			@RequestParam String oldPassword) {
		List<Vendor> vendors = vendorRepository.findByVendorEmail(vendorEmail);
		if(vendors.size()>0) {
			Vendor vendor = vendors.get(0);
			if(vendor.getVendorPassword().equals(tokenGenerator.getToken(oldPassword))) {
				vendor.setVendorPassword(tokenGenerator.getToken(newPassword));
				try {
					vendorRepository.save(vendor);
					return new Respone(true, "Password Change Successful");
				} catch (Exception e) {
					// TODO: handle exception
					return new Respone(false, "Some error occured");
				}
				
			}
			else {
				
				return new Respone(false, "Incorrect Password");
				
			}
		}
		else {
			
			return new Respone(false, "Invalid VendorEmail");
			
		}
		
	}
	
	@PostMapping("/admins/register")
	@ResponseBody
	public RegisterResponse registerAdmin(@RequestBody Admin admin) {
		admin.setAdminPassword(tokenGenerator.getToken(admin.getAdminPassword()));
		try {
			admin = adminRepository.save(admin);
			return new RegisterResponse(true, "Registered", admin.getAdminId());
		} catch (Exception e) {
			// TODO: handle exception
			if (e.getClass() == DataIntegrityViolationException.class) {
				return new RegisterResponse(false, "admin already registered", 0L);
			}

			return new RegisterResponse(false, "Some error occured", 0L);
		}
	}
	
	@PostMapping("/admin/changePassword")
	@ResponseBody
	public Respone adminChangePassword(@RequestParam String adminEmail, @RequestParam String newPassword,
			@RequestParam String oldPassword) {
		List<Admin> admins = adminRepository.findByAdminEmail(adminEmail);
		if(admins.size()>0) {
			Admin admin = admins.get(0);
			if(admin.getAdminPassword().equals(tokenGenerator.getToken(oldPassword))) {
				admin.setAdminPassword(tokenGenerator.getToken(newPassword));
				try {
					adminRepository.save(admin);
					return new Respone(true, "Password Change Successful");
				} catch (Exception e) {
					// TODO: handle exception
					return new Respone(false, "Some error occured");
				}
				
			}
			else {
				
				return new Respone(false, "Incorrect Password");
				
			}
		}
		else {
			
			return new Respone(false, "Invalid AdminEmail");
			
		}
		
	}

}
