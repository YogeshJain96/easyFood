package com.easyFood.api.lib;

public class Respone {

	private Boolean success;
	private String message;
	
	public Respone() {
		// TODO Auto-generated constructor stub
	}
	
	public Respone(Boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}

	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
	
}
