package com.hi031.shh.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.*;

@SuppressWarnings("serial")
@Entity
@Getter
@Setter
@ToString
@Builder
@Table(name = "Link")
public class Link implements Serializable{
	@Id
	@Column(name="link_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String linkId;
	
	@Column(name="proposer_id")
	private @NonNull String proposerId;
	
	@Column(name="receiver_id")
	private @NonNull String receiverId;

	private String content;

	@Column(name="is_watched")
	private  int isWatched;

	private  int state;
	private  int management;

	@Column(name="proposal_date")
	private String proposalDate;

	@OneToOne
    @JoinColumn(name="receiver_id", insertable = false, updatable = false)
    private Store receiver;
	
	@OneToOne
    @JoinColumn(name="proposer_id", insertable = false, updatable = false)
    private Store proposer;
	
	public Store getProposer() {
		return proposer;
	}

	public void setProposer(Store proposer) {
		this.proposer = proposer;
	}

	public Store getReceiver() {
		return receiver;
	}

	public void setReceiver(Store receiver) {
		this.receiver = receiver;
	}

	public String getLinkId() {
		return linkId;
	}

	public void setLinkId(String linkId) {
		this.linkId = linkId;
	}

	public String getProposerId() {
		return proposerId;
	}

	public void setProposerId(String proposerId) {
		this.proposerId = proposerId;
	}

	public String getReceiverId() {
		return receiverId;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public int getManagement() {
		return management;
	}

	public void setManagement(int management) {
		this.management = management;
	}

	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}

	public String getProposalDate() {
		return proposalDate;
	}

	public void setProposalDate(String proposalDate) {
		this.proposalDate = proposalDate;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	public int getIsWatched() {
		return isWatched;
	}

	public void setIsWatched(int isWatched) {
		this.isWatched = isWatched;
	}

}
