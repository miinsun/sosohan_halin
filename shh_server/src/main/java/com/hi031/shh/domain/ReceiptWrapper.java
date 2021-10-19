package com.hi031.shh.domain;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class ReceiptWrapper implements Serializable {
	private boolean isin;
	private Object result;
	
	public ReceiptWrapper(boolean isin, Object result) {
		super();
		this.isin = isin;
		this.result = result;
	}
	
	public boolean isIsin() {
		return isin;
	}
	
	public void setIsin(boolean isin) {
		this.isin = isin;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}
	
	
}
