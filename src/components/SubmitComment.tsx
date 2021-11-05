import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

function SubmitComment(props: any) {

    function closeSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        if (props.comment.commentText !== "") {
            props.onHide();
            props.dispatchComment();
        } else {
            alert("Your comment cannot be empty!");
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id="createCommentModal"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    New Comment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* Text Input */}
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <Form.Control
                                as="textarea"
                                placeholder="Comment"
                                style={{ height: "100px" }}
                                onChange={(event) => props.setComment({ ...props.comment, commentText: event.target.value })}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* Submit Button */}
                <Button type="button" onClick={closeSubmit}>Leave Comment</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmitComment;