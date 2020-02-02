package com.easyFood.api.lib;

public class RegisterResponse extends Respone {

	private Long userId;
	public RegisterResponse() {
		// TODO Auto-generated constructor stub
	}

	public RegisterResponse(Boolean success, String message, Long userId) {
		super(success, message);
		// TODO Auto-generated constructor stub
		this.userId = userId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	

}
