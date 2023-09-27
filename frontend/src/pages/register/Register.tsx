import { MantineProvider } from "@mantine/core";
import "./Register.scoped.css";
import { useReducer } from "react";
import BasicInfo from "../../components/basic-info/BasicInfo";
import Usage from "../../components/usage/Usage";
import BoardName from "../../components/board-name/BoardName";

const Register = () => {
  enum RegisterStep {
    BasicInfo = 0,
    Usage = 1,
    BoardName = 2,
  }

  enum ReducerAction {
    Next,
    Previous,
  }

  type ReducerState = {
    step: RegisterStep;
    workspaceName: string | null;
  };

  const stepReducer = (
    currentState: ReducerState,
    action: {
      type: ReducerAction;
      data: { workspaceName: string | null };
    }
  ): ReducerState => {
    if (action.type === ReducerAction.Next) {
      return {
        step: currentState.step++,
        workspaceName: action.data.workspaceName,
      };
    }
    if (action.type === ReducerAction.Previous) {
      return {
        step: currentState.step--,
        workspaceName: null,
      };
    }
    throw new Error("Invalid ReducerAction.");
  };

  const [currentState] = useReducer(stepReducer, {
    step: RegisterStep.BasicInfo,
    workspaceName: null,
  });

  let stepComponent;
  switch (currentState.step) {
    case RegisterStep.BasicInfo:
      stepComponent = <BasicInfo />;
      break;
    case RegisterStep.Usage:
      stepComponent = (
        <Usage
          handleNextStep={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      );
      break;
    case RegisterStep.BoardName:
      stepComponent = (
        <BoardName
          handleNextStep={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      );
      break;
    default:
      stepComponent = <BasicInfo />;
  }

  return (
    <MantineProvider
      theme={{
        fontFamily: "Montserrat",
        colors: {
          background: ["#141126"],
        },
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={
            {
              /* ... */
            }
          }
        >
          {/* ... (your existing code) */}
          {stepComponent}
          {/* ... (your existing code) */}
        </div>
      </div>
    </MantineProvider>
  );
};

export default Register;
