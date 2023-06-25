import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import styles from "../HomeCard/HomesCard.module.css"
// import { useNavigate } from "react-router-dom";
import { Modal } from "antd"
// import fantomImage from "../../Assets/images/fantom-logo.webp"
import { NFTs } from "./data"

import { Autoplay, Pagination, Navigation } from "swiper"

const CollectionsCard = () => {
    // const navigate = useNavigate();
    const handleNavigate = () => {
        // navigate("/marketplace");
    }
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState([])
    const showModal = (Nft) => {
        setIsModalOpen(true)
        setModalContent([Nft])
    }
    const handleMint = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    return (
        <>
            <div className={styles.nftcard_container}>
                {NFTs.map((Nft) => (
                    <div
                        className={styles.nftcard}
                        key={Nft.key}
                        onClick={() => showModal(Nft)}
                    >
                        <div className={styles.nftcard_details}>
                            <img
                                className={styles.nft_image}
                                src={Nft.nftImage[0]}
                                alt=""
                            />
                            <h5 className={styles.nft_name}>{Nft.nftName}</h5>
                            <div className={styles.nft_price_number}>
                                <img
                                    src={"/Assets/images/fantom-logo.webp"}
                                    alt=""
                                    className={styles.fantom_logo}
                                />
                                <span className={styles.nft_price}>
                                    {Nft.nftPrice}
                                </span>
                            </div>
                            <hr className={styles.nft_line} />
                            <div className={styles.nft_time_button}>
                                <button
                                    className={styles.bid}
                                    onClick={() => showModal(Nft)}
                                >
                                    Preview
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <Modal
                    className={styles.nft_modal}
                    open={isModalOpen}
                    centered={true}
                    footer={null}
                    onOk={handleMint}
                    onCancel={handleCancel}
                >
                    {modalContent.map((newModal) => (
                        <div
                            className={styles.nft_modal_content}
                            key={newModal.nftName}
                        >
                            <div className={styles.nft_modal_image}>
                                <img
                                    src={newModal.nftImage[0]}
                                    alt=""
                                    className={styles.nft_modal_img}
                                />
                            </div>

                            <div className={styles.nft_modal_details}>
                                <h5 className={styles.modal_text}>
                                    {newModal.nftName}
                                </h5>
                                <div className={styles.modal_logo_price}>
                                    <img
                                        className={styles.fantom_logo}
                                        src={"./Assets/images/fantom-logo.webp"}
                                        alt=""
                                    />
                                    <h5 className={styles.modal_price}>
                                        {newModal.nftPrice} FTM
                                    </h5>
                                </div>
                                <div className={styles.nft_button}>
                                    <button
                                        className={styles.secondary_btn}
                                        onClick={handleCancel}
                                    >
                                        Not Yet
                                    </button>
                                    <button
                                        className={styles.primary_btn}
                                        onClick={handleMint}
                                    >
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Modal>
                <div>
                    <button
                        className={styles.view_more_btn}
                        onClick={handleNavigate}
                    >
                        View More
                    </button>
                </div>
            </div>
        </>
    )
}

export default CollectionsCard
