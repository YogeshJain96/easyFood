package com.easyFood.api.lib;



public class VendorsListResponse {

	private Long id;

	private String email;

	private String name;

	private Long phone;

	private Long orgId;

	private String org;
	
	public VendorsListResponse() {
		// TODO Auto-generated constructor stub
	}

	public VendorsListResponse(Long vendorId, String vendorEmail, String vendorName, Long vendorPhone, Long vendorOrgId,
			String vendorOrg) {
		super();
		this.id = vendorId;
		this.email = vendorEmail;
		this.name = vendorName;
		this.phone = vendorPhone;
		this.orgId = vendorOrgId;
		this.org = vendorOrg;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public Long getOrgId() {
		return orgId;
	}

	public void setOrgId(Long orgId) {
		this.orgId = orgId;
	}

	public String getOrg() {
		return org;
	}

	public void setOrg(String org) {
		this.org = org;
	}

	
	
	
}
