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
import { CodeEditor } from "./CodeEditor";
import { CodeEditorCountArgs } from "./CodeEditorCountArgs";
import { CodeEditorFindManyArgs } from "./CodeEditorFindManyArgs";
import { CodeEditorFindUniqueArgs } from "./CodeEditorFindUniqueArgs";
import { CreateCodeEditorArgs } from "./CreateCodeEditorArgs";
import { UpdateCodeEditorArgs } from "./UpdateCodeEditorArgs";
import { DeleteCodeEditorArgs } from "./DeleteCodeEditorArgs";
import { CodeEditorService } from "../codeEditor.service";
@graphql.Resolver(() => CodeEditor)
export class CodeEditorResolverBase {
  constructor(protected readonly service: CodeEditorService) {}

  async _codeEditorsMeta(
    @graphql.Args() args: CodeEditorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CodeEditor])
  async codeEditors(
    @graphql.Args() args: CodeEditorFindManyArgs
  ): Promise<CodeEditor[]> {
    return this.service.codeEditors(args);
  }

  @graphql.Query(() => CodeEditor, { nullable: true })
  async codeEditor(
    @graphql.Args() args: CodeEditorFindUniqueArgs
  ): Promise<CodeEditor | null> {
    const result = await this.service.codeEditor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CodeEditor)
  async createCodeEditor(
    @graphql.Args() args: CreateCodeEditorArgs
  ): Promise<CodeEditor> {
    return await this.service.createCodeEditor({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CodeEditor)
  async updateCodeEditor(
    @graphql.Args() args: UpdateCodeEditorArgs
  ): Promise<CodeEditor | null> {
    try {
      return await this.service.updateCodeEditor({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => CodeEditor)
  async deleteCodeEditor(
    @graphql.Args() args: DeleteCodeEditorArgs
  ): Promise<CodeEditor | null> {
    try {
      return await this.service.deleteCodeEditor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
