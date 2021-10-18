package com.hi031.shh.repository;

import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.hi031.shh.domain.BusinessAccount;
import com.hi031.shh.domain.Link;

@EnableJpaRepositories
public interface LinkRepository extends PagingAndSortingRepository<Link, Integer>, CrudRepository<Link, Integer>  {
	Link findByLinkId(String linkId) throws DataAccessException;
	List<Link> findByProposerId(String proposerId) throws DataAccessException;
	List<Link> findByReceiverId(String receiverId) throws DataAccessException;
	public long countByProposerId(String proposerId) throws DataAccessException;
	Link findByProposerIdAndReceiverId(String proposerId, String receiverId) throws DataAccessException;
	List<Link> findLinkByReceiverIdAndStateAndManagement(String receiverId, int state, int managemnet) throws DataAccessException;
	List<Link> findLinkByProposerIdAndStateAndManagement(String proposerId, int state, int managemnet) throws DataAccessException;
	List<Link> findTop7ByIsWatchedAndReceiverIdOrderByProposalDateDesc(int isWatched, String ReceiverId) throws DataAccessException;
}
