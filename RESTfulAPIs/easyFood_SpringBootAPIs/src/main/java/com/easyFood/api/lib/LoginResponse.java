package com.easyFood.api.lib;

import java.util.Map;

public class LoginResponse extends Respone {

	private Map<String, String> result;
	public LoginResponse() {
		// TODO Auto-generated constructor stub
	}

	public LoginResponse(boolean success, String message) {
		super(success, message);
		// TODO Auto-generated constructor stub
	}

	public Map<String, String> getResult() {
		return result;
	}

	public void setResult(Map<String, String> result) {
		this.result = result;
	}
	
	

}
