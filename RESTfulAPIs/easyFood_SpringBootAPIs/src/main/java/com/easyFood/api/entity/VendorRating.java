package com.easyFood.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vendors_ratings")
public class VendorRating {

	@Id
	@Column(name = "Id")
	private Long vendorId;
	
	@Column(name = "name",nullable = false,length = 30)
	private String vendorName;
	
	@Column(name = "rating")
	private int vendorRarting;
	
	@OneToOne
	@MapsId
	private Vendor vendor;
	
	public VendorRating() {
		// TODO Auto-generated constructor stub
	}

	public VendorRating(String vendorName, int vendorRarting) {
		super();
		this.vendorName = vendorName;
		this.vendorRarting = vendorRarting;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public int getVendorRarting() {
		return vendorRarting;
	}

	public void setVendorRarting(int vendorRarting) {
		this.vendorRarting = vendorRarting;
	}

	public Long getVendorId() {
		return vendorId;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}
	
	
}
