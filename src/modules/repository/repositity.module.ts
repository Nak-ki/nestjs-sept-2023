import { Global, Module } from '@nestjs/common';

import { ArticleRepository } from './services/article.repository';
import { CommentRepository } from './services/comment.repository';
import { FollowRepository } from './services/follow.repository';
import { LikeRepository } from './services/like.repository';
import { RefreshTokenRepository } from './services/refresh-token.repository';
import { TagRepository } from './services/tag.repository';
import { UserRepository } from './services/user.repository';

@Global()
@Module({
  providers: [
    UserRepository,
    ArticleRepository,
    CommentRepository,
    FollowRepository,
    LikeRepository,
    RefreshTokenRepository,
    TagRepository,
  ],
  exports: [
    UserRepository,
    ArticleRepository,
    CommentRepository,
    FollowRepository,
    LikeRepository,
    RefreshTokenRepository,
    TagRepository,
  ],
})
export class RepositoryModule {}
