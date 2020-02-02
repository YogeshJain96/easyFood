package com.easyFood.api.entity;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class RechargeHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private Long rechargeId;
	
	@ManyToOne
	private User user;
	
	@ManyToOne
	private Admin admin;
	
	@Column(name = "amount")
	private Double rechargeAmount;
	
	@Column(name = "date")
	@CreationTimestamp
	private Date rechargeDate;

	public RechargeHistory() {
		// TODO Auto-generated constructor stub
	}
	
	
	public RechargeHistory(User user, Admin admin, Double rechargeAmount) {
		super();
		this.user = user;
		this.admin = admin;
		this.rechargeAmount = rechargeAmount;
	}


	public RechargeHistory(Long rechargeId, User user, Admin admin, Double rechargeAmount, Date rechargeDate) {
		super();
		this.rechargeId = rechargeId;
		this.user = user;
		this.admin = admin;
		this.rechargeAmount = rechargeAmount;
		this.rechargeDate = rechargeDate;
	}

	public Long getRechargeId() {
		return rechargeId;
	}

	public void setRechargeId(Long rechargeId) {
		this.rechargeId = rechargeId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public Double getRechargeAmount() {
		return rechargeAmount;
	}

	public void setRechargeAmount(Double rechargeAmount) {
		this.rechargeAmount = rechargeAmount;
	}

	public Date getRechargeDate() {
		return rechargeDate;
	}

	public void setRechargeDate(Date rechargeDate) {
		this.rechargeDate = rechargeDate;
	}
	
	
}
