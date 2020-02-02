package com.easyFood.api.lib;

import java.util.Map;

public class WalletResponse extends Respone {

	
	private Map<String, String> result ;
	
	
	public WalletResponse() {
		// TODO Auto-generated constructor stub
	}
	
	public WalletResponse(Boolean success, String message,Map<String, String> result) {
		super(success, message);
		this.result = result;
		// TODO Auto-generated constructor stub
	}

	
	public Map<String, String> getResult() {
		return result;
	}
	
	public void setResult(Map<String, String> result) {
		this.result = result;
	}
}
