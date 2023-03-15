package com.example.triviewer.comment.entity;

import com.example.triviewer.global.audit.Auditable;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    private String answerContent;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

/*
    // 리뷰 관계매핑
    @ManyToOne
    @JoinColumn(name = "reviewId")
    private Review review;

    // 유저 관계매핑
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
*/


}
