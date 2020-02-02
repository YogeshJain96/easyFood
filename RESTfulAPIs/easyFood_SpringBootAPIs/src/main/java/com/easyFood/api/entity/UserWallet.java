package com.easyFood.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users_wallet")
public class UserWallet {

	@Id
	@Column(name = "Id")
	private Long userId;
	
	@Column(name = "balance")
	private Double userBalance=0.0;

	@OneToOne
	@MapsId
	private User user;
	
	public UserWallet() {
		// TODO Auto-generated constructor stub
	}

	public UserWallet(Double userBalance) {
		super();
		this.userBalance = userBalance;
		
	}

	public Double getUserBalance() {
		return userBalance;
	}

	public void setUserBalance(Double userBalance) {
		this.userBalance = userBalance;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	
}
