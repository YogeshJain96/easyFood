package com.easyFood.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.easyFood.api.Repository.AdminRepository;
import com.easyFood.api.Repository.UserRepository;
import com.easyFood.api.Repository.UserWalletRepository;
import com.easyFood.api.Repository.VendorRatingRepository;
import com.easyFood.api.entity.Admin;
import com.easyFood.api.entity.User;
import com.easyFood.api.entity.UserWallet;
import com.easyFood.api.entity.Vendor;
import com.easyFood.api.entity.VendorRating;
import com.easyFood.api.lib.TokenGenerator;

@SpringBootApplication
public class EasyFoodApplication {

	@Autowired
	private UserWalletRepository userWalletRepository;

	@Autowired
	private VendorRatingRepository vendorRatingRepository;

	@Autowired
	private AdminRepository adminRepository;

	private TokenGenerator tokenGenerator = new TokenGenerator();
	private static final Logger logger = LoggerFactory.getLogger(EasyFoodApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(EasyFoodApplication.class, args);
		logger.info("app is running");
	}

	@Bean
	CommandLineRunner runner() {

		return args -> {
//			Long ph = 987654310L;
//			User user = new User("apurup@gmail.com", tokenGenerator.getToken("12345"), "Arram Apurup Reddy", ph, 1234L, "CDAC");
//
//			UserWallet userWallet = new UserWallet(10000.0);
//			userWallet.setUser(user);
//
//			userWalletRepository.save(userWallet);
//
//			User user1 = new User("yogesh@gmail.com", tokenGenerator.getToken("123"), "Yogesh Jain", ph, 1234L, "CDAC");
//
//			UserWallet userWallet1 = new UserWallet(10000.0);
//			userWallet1.setUser(user1);
//
//			userWalletRepository.save(userWallet1);
//
//			
//			Vendor vendor = new Vendor("easysnacks@easyfood.com", tokenGenerator.getToken("easyfood"), "easySnacks", ph, 100L, "CDAC");
//
//			VendorRating vendorRating = new VendorRating("easySnacks", 4);
//			vendorRating.setVendor(vendor);
//
//			vendorRatingRepository.save(vendorRating);
//
//			Vendor vendor1 = new Vendor("easyjuice@easyfood.com", tokenGenerator.getToken("easyfood"), "easyJuice", ph, 101L, "CDAC");
//
//			VendorRating vendorRating1 = new VendorRating("easyJuice", 4);
//			vendorRating1.setVendor(vendor1);
//
//			vendorRatingRepository.save(vendorRating1);
//			
//			Vendor vendor3 = new Vendor("easymeals@easyfood.com", tokenGenerator.getToken("easyfood"), "easyMeals", ph, 102L, "CDAC");
//
//			VendorRating vendorRating3 = new VendorRating("easyMeals", 3);
//			vendorRating3.setVendor(vendor3);
//			
//			vendorRatingRepository.save(vendorRating3);
//			Admin admin = new Admin("akash@gmail.com", tokenGenerator.getToken("akash"), "Akash Singh", ph, 1111L, "CDAC");
//
//			adminRepository.save(admin);
			
			
		};
	}
}
