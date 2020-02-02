package com.easyFood.api.controler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.easyFood.api.Repository.AdminRepository;
import com.easyFood.api.Repository.RechargeHistoryRepository;
import com.easyFood.api.Repository.UserWalletRepository;
import com.easyFood.api.entity.Admin;
import com.easyFood.api.entity.RechargeHistory;
import com.easyFood.api.entity.User;
import com.easyFood.api.entity.UserWallet;
import com.easyFood.api.lib.History;
import com.easyFood.api.lib.RechargeHistoryResponse;
import com.easyFood.api.lib.WalletResponse;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AdminController {

	@Autowired
	private UserWalletRepository userWalletRepository;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private RechargeHistoryRepository rechargeHistoryRepository;
	
	@PostMapping("/admin/recharge")
	@ResponseBody
	public WalletResponse rechargeUser(@RequestParam Long userId, @RequestParam Long adminId,
			@RequestParam Double amount) {

		User user = new User(userId);
		Admin admin = new Admin(adminId);
		HashMap<String, String> result = null;
		List<UserWallet> userWallets = userWalletRepository.findByUserId(userId);
		if (userWallets.size() > 0) {
			List<Admin> admins = adminRepository.findByAdminId(adminId);
			if (admins.size() > 0) {
				UserWallet userWallet = userWallets.get(0);
				userWallet.setUserBalance(userWallet.getUserBalance() + amount);
				userWallet = userWalletRepository.save(userWallet);
				RechargeHistory rechargeHistory = new RechargeHistory( user, admin, amount);
				rechargeHistoryRepository.save(rechargeHistory);
				result = new HashMap<>();
				result.put("id", userWallet.getUserId().toString());
				result.put("balance", userWallet.getUserBalance().toString());
				return new WalletResponse(true, "balance updated", result);
			} else {
				return new WalletResponse(false, "no admin with given id", result);
			}

		} else {
			return new WalletResponse(false, "no user with given id", result);
		}

	}
	
	//api for history
	
	@GetMapping("/admin/rechargehistory")
	@ResponseBody
	public RechargeHistoryResponse getRechargeHistory() {
		
		List<RechargeHistory> response = null;
		List<History> result = new ArrayList<>();
		response = (List<RechargeHistory>) rechargeHistoryRepository.findAll();
		for (RechargeHistory rechargeHistory : response) {
			result.add(new History(rechargeHistory.getRechargeId(), rechargeHistory.getUser().getUserId(),
					rechargeHistory.getAdmin().getAdminId(), rechargeHistory.getRechargeAmount(), rechargeHistory.getRechargeDate()));
		}
		if(result.size()>0) {
			return new RechargeHistoryResponse(true,"history fetched",result);
		}
		else {
			return new RechargeHistoryResponse(true,"no recharge history",null);
		}
		
		
	}
	
	
}
