package com.easyFood.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "users")
public class User {

	//userId,userEmail,userPass,userFullName,userPhone,userOrg,userOrgId
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private Long userId;
	
	@Column(name = "email",nullable = false,length = 30,unique = true)
	private String userEmail;
	
	@Column(name="password",nullable = false,length = 64)
	private String userPassword;
	
	@Column(name = "name",nullable = false,length = 30)
	private String userName;
	
	@Column(name = "phone",nullable = false)
	private Long userPhone;
	
	@Column(name="OrganisationId")
	private Long userOrgId;
	
	@Column(name = "Organisation",nullable = false,length=40)
	private String userOrg;
	
	public User() {
		// TODO Auto-generated constructor stub
	}

	
	public User(Long userId) {
		super();
		this.userId = userId;
	}

	
	public User(String userEmail, String userPassword, String userName, Long userPhone, Long userOrgId,
			String userOrg) {
		super();
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userName = userName;
		this.userPhone = userPhone;
		this.userOrgId = userOrgId;
		this.userOrg = userOrg;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Long getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(Long userPhone) {
		this.userPhone = userPhone;
	}

	public Long getUserOrgId() {
		return userOrgId;
	}

	public void setUserOrgId(Long userOrgId) {
		this.userOrgId = userOrgId;
	}

	public String getUserOrg() {
		return userOrg;
	}

	public void setUserOrg(String userOrg) {
		this.userOrg = userOrg;
	}

	public Long getUserId() {
		return userId;
	}
	
	
	
}
