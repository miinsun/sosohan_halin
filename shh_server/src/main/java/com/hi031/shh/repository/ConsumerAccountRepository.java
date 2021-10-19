package com.hi031.shh.repository;

import java.util.Optional;

import org.springframework.dao.DataAccessException;
import org.springframework.data.repository.CrudRepository;

import com.hi031.shh.domain.BusinessAccount;
import com.hi031.shh.domain.ConsumerAccount;

public interface ConsumerAccountRepository extends CrudRepository<ConsumerAccount, String> {
	Optional<ConsumerAccount> findByConsumerUserId(String consumerUserId) throws DataAccessException;
	Optional<ConsumerAccount> findByConsumerUserIdAndPassword(String consumerUserId, String password) throws DataAccessException;
	Optional<ConsumerAccount> findByConsumerUserIdAndEmail(String consumerUserId, String email) throws DataAccessException;
	void deleteByConsumerUserId(String consumerUserId) throws DataAccessException;
	Optional<ConsumerAccount> findByNameAndEmail(String name, String email) throws DataAccessException;
}