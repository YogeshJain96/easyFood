package com.easyFood.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vendors")
public class Vendor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private Long vendorId;
	
	@Column(name = "email",nullable = false,length = 30,unique = true)
	private String vendorEmail;
	
	@Column(name="password",nullable = false,length = 64)
	private String vendorPassword;
	
	@Column(name = "name",nullable = false,length = 30)
	private String vendorName;
	
	@Column(name = "phone",nullable = false)
	private Long vendorPhone;
	
	@Column(name="OrganisationId")
	private Long vendorOrgId;
	
	@Column(name = "Organisation",nullable = false,length=40)
	private String vendorOrg;

	public Vendor() {
		// TODO Auto-generated constructor stub
	}

	public Vendor(String vendorEmail, String vendorPassword, String vendorName, Long vendorPhone, Long vendorOrgId,
			String vendorOrg) {
		super();
		this.vendorEmail = vendorEmail;
		this.vendorPassword = vendorPassword;
		this.vendorName = vendorName;
		this.vendorPhone = vendorPhone;
		this.vendorOrgId = vendorOrgId;
		this.vendorOrg = vendorOrg;
	}

	public String getVendorEmail() {
		return vendorEmail;
	}

	public void setVendorEmail(String vendorEmail) {
		this.vendorEmail = vendorEmail;
	}

	public String getVendorPassword() {
		return vendorPassword;
	}

	public void setVendorPassword(String vendorPassword) {
		this.vendorPassword = vendorPassword;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public Long getVendorPhone() {
		return vendorPhone;
	}

	public void setVendorPhone(Long vendorPhone) {
		this.vendorPhone = vendorPhone;
	}

	public Long getVendorOrgId() {
		return vendorOrgId;
	}

	public void setVendorOrgId(Long vendorOrgId) {
		this.vendorOrgId = vendorOrgId;
	}

	public String getVendorOrg() {
		return vendorOrg;
	}

	public void setVendorOrg(String vendorOrg) {
		this.vendorOrg = vendorOrg;
	}

	public Long getVendorId() {
		return vendorId;
	}
	
	
}
