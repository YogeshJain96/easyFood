package com.easyFood.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admins")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private Long adminId;
	
	@Column(name = "email",nullable = false,length = 30,unique = true)
	private String adminEmail;
	
	@Column(name="password",nullable = false,length = 64)
	private String adminPassword;
	
	@Column(name = "name",nullable = false,length = 30)
	private String adminName;
	
	@Column(name = "phone",nullable = false)
	private Long adminPhone;
	
	@Column(name="OrganisationId")
	private Long adminOrgId;
	
	@Column(name = "Organisation",nullable = false,length=40)
	private String adminOrg;
	
	public Admin() {
		// TODO Auto-generated constructor stub
	}

	
	public Admin(Long adminId) {
		super();
		this.adminId = adminId;
	}


	public Admin(String adminEmail, String adminPassword, String adminName, Long adminPhone, Long adminOrgId,
			String adminOrg) {
		super();
		this.adminEmail = adminEmail;
		this.adminPassword = adminPassword;
		this.adminName = adminName;
		this.adminPhone = adminPhone;
		this.adminOrgId = adminOrgId;
		this.adminOrg = adminOrg;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public Long getAdminPhone() {
		return adminPhone;
	}

	public void setAdminPhone(Long adminPhone) {
		this.adminPhone = adminPhone;
	}

	public Long getAdminOrgId() {
		return adminOrgId;
	}

	public void setAdminOrgId(Long adminOrgId) {
		this.adminOrgId = adminOrgId;
	}

	public String getAdminOrg() {
		return adminOrg;
	}

	public void setAdminOrg(String adminOrg) {
		this.adminOrg = adminOrg;
	}

	public Long getAdminId() {
		return adminId;
	}
	
	
}
