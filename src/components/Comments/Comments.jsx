import React, { useState } from "react";
import commentsData from "./commentsData";
import CommentsModal from "./CommentsModal";
import {
  CommentsWrapper,
  ReviewContainer,
  GuestImage,
  GuestName,
  GuestData,
  GuestRevDate,
  DataContainer,
  GuestComment,
  GuestReview,
  ReviewBtnDiv,
  ReviewBtn,
} from "./CommentsGuests.elements";

function Comments({ pageId }) {
  const reviews = commentsData;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      {reviews
        .filter((activity) => activity.id === pageId)
        .map((activityReview, index) => {
          const activityComments = activityReview.comments;
          const topFiveComments = activityComments.slice(0, 5);

          const singleReviewKey = `${activityReview}_${index}`;
          return (
            <div key={singleReviewKey}>
              <CommentsWrapper>
                <ReviewContainer>
                  {topFiveComments.map((guest, i) => {
                    const guestId = `${guest}_${i}`;
                    return (
                      <>
                        <GuestReview>
                          <div key={guestId}>
                            <DataContainer>
                              <GuestImage
                                img
                                src={guest.image}
                                alt="author_avatar"
                              />

                              <GuestData>
                                <GuestName>{guest.name}</GuestName>
                                <GuestRevDate>{guest.date}</GuestRevDate>
                              </GuestData>
                            </DataContainer>
                          </div>
                          <GuestComment>{guest.body}</GuestComment>
                        </GuestReview>
                      </>
                    );
                  })}
                </ReviewContainer>
                {activityComments.length >= 5 && (
                  <ReviewBtnDiv>
                    {" "}
                    <ReviewBtn
                      type="button"
                      onClick={() => setIsModalVisible(true)}
                    >
                      Mostra tutte le {activityComments.length} recensioni
                    </ReviewBtn>
                  </ReviewBtnDiv>
                )}
                {isModalVisible && (
                  <CommentsModal
                    modalComments={activityComments}
                    isOpen={isModalVisible}
                    setIsOpen={setIsModalVisible}
                  />
                )}
              </CommentsWrapper>
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
