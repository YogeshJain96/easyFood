package com.easyFood.api.controler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.easyFood.api.Repository.RechargeHistoryRepository;
import com.easyFood.api.Repository.UserWalletRepository;
import com.easyFood.api.entity.RechargeHistory;
import com.easyFood.api.entity.User;
import com.easyFood.api.entity.UserWallet;
import com.easyFood.api.lib.History;
import com.easyFood.api.lib.RechargeHistoryResponse;
import com.easyFood.api.lib.WalletResponse;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserController {

	@Autowired
	private UserWalletRepository userWalletRepository;
	
	@Autowired
	private RechargeHistoryRepository rechargeHistoryRepository;

	@ResponseBody
	@GetMapping("/users/wallet")
	public WalletResponse getWalletBalance(@RequestParam Long id) {
		HashMap<String, String> result = null;
		List<UserWallet> userWallets = userWalletRepository.findByUserId(id);
		if (userWallets.size() > 0) {
			UserWallet userWallet = userWallets.get(0);

			result = new HashMap<>();
			result.put("id", userWallet.getUserId().toString());
			result.put("balance", userWallet.getUserBalance().toString());
			return new WalletResponse(true, "balance fetched", result);
		} else {
			return new WalletResponse(false, "no user with given id", result);
		}

	}
	
	@ResponseBody
	@PostMapping("/users/wallet")
	public WalletResponse updateWalletBalance(@RequestParam Long id,@RequestParam Double balance) {
		
		HashMap<String, String> result = null;
		List<UserWallet> userWallets = userWalletRepository.findByUserId(id);
		if (userWallets.size() > 0) {
			UserWallet userWallet = userWallets.get(0);
			userWallet.setUserBalance(balance);
			userWallet = userWalletRepository.save(userWallet);
			result = new HashMap<>();
			result.put("id", userWallet.getUserId().toString());
			result.put("balance", userWallet.getUserBalance().toString());
			return new WalletResponse(true, "balance updated", result);
		} else {
			return new WalletResponse(false, "no user with given id", result);
		}
		
	}
	
	@ResponseBody
	@GetMapping("/users/rechargehistory")
	public RechargeHistoryResponse getRechargeHistory(@RequestParam Long userId) {
		
		List<RechargeHistory> response = null;
		List<History> result = new ArrayList<>();
		response = rechargeHistoryRepository.findByUser(new User(userId));
		for (RechargeHistory rechargeHistory : response) {
			result.add(new History(rechargeHistory.getRechargeId(), rechargeHistory.getUser().getUserId(),
					rechargeHistory.getAdmin().getAdminId(), rechargeHistory.getRechargeAmount(), rechargeHistory.getRechargeDate()));
		}
		if(result.size()>0) {
			return new RechargeHistoryResponse(true,"history fetched",result);
		}
		else {
			return new RechargeHistoryResponse(false,"no user with given id",null);
		}
		
		
	}
}
