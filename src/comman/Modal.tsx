
import React, { useRef } from 'react';
import { Modal, Button, Tabs, Tab, Form, Col, Row } from 'react-bootstrap';

function ModalPop({ show, handleClose }: any) {
    const fileInputRef = useRef<any>(null);

    const handleFileClick = () => fileInputRef.current.click();

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`);
    };
    return (
        <>
            <Modal show={show} onHide={handleClose} centered size="lg" backdrop="static">
                <Modal.Body className="p-4">
                    <div className="text-end">
                        <Button variant="outline-secondary" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </Button>
                    </div>
                    <Tabs defaultActiveKey="receipts" className="mb-4">
                        <Tab eventKey="bills" title="Bills" />
                        <Tab eventKey="receipts" title="Receipts">
                            <Row className="mb-3">
                                <Col><strong>Document Owner:</strong> Accountant 01</Col>
                                <Col>
                                    <Form.Select size="sm">
                                        <option>Select Client</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                            <div
                                className="border rounded d-flex flex-column align-items-center justify-content-center text-center p-4 mb-3"
                                style={{ borderStyle: 'dashed', cursor: 'pointer', height: '150px' }}
                                onClick={handleFileClick}
                            >
                                <div className="mb-2">
                                    <i className="bi bi-cloud-arrow-up-fill fs-2 text-primary"></i>
                                </div>
                                <div>
                                    <strong className="text-primary">Drag & Drop or Choose file to upload</strong>
                                    <p className="text-muted small">JPG, PNG, PDF, CVS</p>
                                </div>
                                <input type="file" ref={fileInputRef} className="d-none" />
                            </div>

                            <div className="text-center mb-4">
                                <Button variant="primary" className="w-100">Add Receipt</Button>
                            </div>

                            <div>
                                <strong>Send Over Email</strong>
                                <div className="mt-2">
                                    <p className="mb-1">
                                        Single: <span className="text-primary">abc.single@gmail.com</span>
                                        <i className="bi bi-clipboard ms-2" onClick={() => handleCopy('abc.single@gmail.com')} style={{ cursor: 'pointer' }}></i>
                                    </p>
                                    <p>
                                        Multiple: <span className="text-primary">abc.multiple@gmail.com</span>
                                        <i className="bi bi-clipboard ms-2" onClick={() => handleCopy('abc.multiple@gmail.com')} style={{ cursor: 'pointer' }}></i>
                                    </p>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="bank" title="Bank" />
                    </Tabs>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalPop