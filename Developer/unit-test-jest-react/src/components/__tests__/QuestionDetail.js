import QuestionDetail, {
    mapStateToProps,
    QuestionDetailDisplay
} from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";

describe(`The Question Detail Component`, () => {
    describe(`The Container Element`, () => {
        describe(`mapStateToProps`, () => {
            it("should map the state to props correctly", () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big"
                };
                const appStore = {
                    questions: [sampleQuestion]
                };
                const ownProps = {
                    question_id: 42
                };
                const componentState = mapStateToProps(appStore, ownProps);
                console.log(componentState);
                expect(componentState).toEqual(sampleQuestion);
            });
        });
    });

    describe(`The display element`, () => {
        it(`Should not regress`, () => {
            const tree = renderer.create(
                <QuestionDetailDisplay
                    title="THANKS"
                    body="43"
                    answer_count={0}
                    tags={[`abcde`]}
                />
            );

            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
});