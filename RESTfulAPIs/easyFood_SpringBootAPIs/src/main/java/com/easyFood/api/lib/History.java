package com.easyFood.api.lib;

import java.util.Date;

public class History {

	private Long transactionId;
	private Long userId;
	private Long adminId;
	private Double rechargeAmount;
	private Date rechargeDate;

	public History() {
		// TODO Auto-generated constructor stub
	}

	public History(Long transactionId, Long userId, Long adminId, Double rechargeAmount, Date rechargeDate) {
		super();
		this.transactionId = transactionId;
		this.userId = userId;
		this.adminId = adminId;
		this.rechargeAmount = rechargeAmount;
		this.rechargeDate = rechargeDate;
	}

	public Long getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getAdminId() {
		return adminId;
	}

	public void setAdminId(Long adminId) {
		this.adminId = adminId;
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
