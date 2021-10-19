package com.hi031.shh.repository;

import java.util.Optional;

import org.springframework.dao.DataAccessException;
import org.springframework.data.repository.CrudRepository;

import com.hi031.shh.domain.BusinessAccount;

public interface BusinessAccountRepository extends CrudRepository<BusinessAccount, String> {
	Optional<BusinessAccount> findByBusinessUserId(String businessUserId) throws DataAccessException;
	Optional<BusinessAccount> findByBusinessUserIdAndPassword(String businessUserId, String password) throws DataAccessException;
	Optional<BusinessAccount> findByBusinessUserIdAndEmail(String businessUserId, String email) throws DataAccessException;
	void deleteByBusinessUserId(String businessUserId) throws DataAccessException;
	Optional<BusinessAccount> findByNameAndEmail(String name, String email) throws DataAccessException;
}
