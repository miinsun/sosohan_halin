// eslint-disable-next-line import/no-unresolved
import PropTypes from "prop-types";
import React from "react";
import {
  Row, Col, Card, Button, Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/base.css";

const goLogin = () => {
  alert("로그인 후, 상점을 선택하고 이용해주세요");
  document.location.href = "/";
};

const isIn = (results, total, changeState) => {
  if (total !== 0) {
    return (
      <div className="mb-5">
        <Row xs={10} md={5} className="g-4">
          {total > 0
            && results.map((data) => (
              <Col>
                <Card className="text-center mt-4 shadow  mb-3 bg-body rounded">
                  <Card.Header>{data.proposer.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
                      <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086
                      0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
                      />
                      <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02
                      4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
                      />
                    </svg>
                    {data.receiver.name}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {data.content}<br />
                      <p className="text-muted">{data.proposalDate}</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="outline-secondary"
                      onClick={() => changeState(data.linkId, data.state, -1)}
                    >연계취소
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    );
  }

  return (
    <Container className="text-center">
      <Row>
        <Col sm />
        <Col sm>
          <Card className="text-center" style={{ width: "18rem" }}>
            <Card.Header>진행 중인 연계가 없습니다!</Card.Header>
            <Card.Img variant="top" src="../logo192.png" />
            <Card.Footer>
              <Link to="/storelist">
                <Button variant="outline-primary">다른 상점 둘러보기</Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm />
      </Row>
    </Container>
  );
};

const LinkInProgressView = ({
  login, total, results, changeState,
}) => (
  !login ? (
    goLogin()
  ) : (
    <div>
      {isIn(results, total, changeState)}
    </div>
  )
);

LinkInProgressView.propTypes = {
  total: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array,
  changeState: PropTypes.func,
};

LinkInProgressView.defaultProps = {
  total: 0,
  results: [],
  changeState: () => {},
};

export default LinkInProgressView;
