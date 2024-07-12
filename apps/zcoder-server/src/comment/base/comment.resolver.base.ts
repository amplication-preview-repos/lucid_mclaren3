/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Comment } from "./Comment";
import { CommentCountArgs } from "./CommentCountArgs";
import { CommentFindManyArgs } from "./CommentFindManyArgs";
import { CommentFindUniqueArgs } from "./CommentFindUniqueArgs";
import { CreateCommentArgs } from "./CreateCommentArgs";
import { UpdateCommentArgs } from "./UpdateCommentArgs";
import { DeleteCommentArgs } from "./DeleteCommentArgs";
import { Solution } from "../../solution/base/Solution";
import { CommentService } from "../comment.service";
@graphql.Resolver(() => Comment)
export class CommentResolverBase {
  constructor(protected readonly service: CommentService) {}

  async _commentsMeta(
    @graphql.Args() args: CommentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Comment])
  async comments(
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    return this.service.comments(args);
  }

  @graphql.Query(() => Comment, { nullable: true })
  async comment(
    @graphql.Args() args: CommentFindUniqueArgs
  ): Promise<Comment | null> {
    const result = await this.service.comment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Comment)
  async createComment(
    @graphql.Args() args: CreateCommentArgs
  ): Promise<Comment> {
    return await this.service.createComment({
      ...args,
      data: {
        ...args.data,

        solution: args.data.solution
          ? {
              connect: args.data.solution,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Comment)
  async updateComment(
    @graphql.Args() args: UpdateCommentArgs
  ): Promise<Comment | null> {
    try {
      return await this.service.updateComment({
        ...args,
        data: {
          ...args.data,

          solution: args.data.solution
            ? {
                connect: args.data.solution,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Comment)
  async deleteComment(
    @graphql.Args() args: DeleteCommentArgs
  ): Promise<Comment | null> {
    try {
      return await this.service.deleteComment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Solution, {
    nullable: true,
    name: "solution",
  })
  async getSolution(
    @graphql.Parent() parent: Comment
  ): Promise<Solution | null> {
    const result = await this.service.getSolution(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
