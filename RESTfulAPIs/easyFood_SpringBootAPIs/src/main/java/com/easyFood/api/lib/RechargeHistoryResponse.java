package com.easyFood.api.lib;

import java.util.List;




public class RechargeHistoryResponse extends Respone {

	private List<History> result;
	public RechargeHistoryResponse() {
		// TODO Auto-generated constructor stub
	}

	public RechargeHistoryResponse(Boolean success, String message,List<History> result) {
		super(success, message);
		this.result = result;
		// TODO Auto-generated constructor stub
	}

	public List<History> getResult() {
		return result;
	}

	public void setResult(List<History> result) {
		this.result = result;
	}

	

	
}
