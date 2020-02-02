package com.easyFood.api.lib;

import java.util.List;

public class ListResponse<T> extends Respone {

	private List<T> result;
	public ListResponse() {
		// TODO Auto-generated constructor stub
	}

	public ListResponse(Boolean success, String message,List<T> result) {
		super(success, message);
		this.result = result;
		// TODO Auto-generated constructor stub
	}

	public List<T> getResult() {
		return result;
	}

	public void setResult(List<T> result) {
		this.result = result;
	}
	
	

}
