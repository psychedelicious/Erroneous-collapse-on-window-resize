import { useRef, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const panelStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.contentRect.width);
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <PanelGroup
      direction="horizontal"
      style={{ width: "90vw", height: "90vh", backgroundColor: "lightblue" }}
    >
      <Panel
        minSizePixels={200}
        maxSizePixels={200}
        style={panelStyles}
        collapsible
      >
        left
      </Panel>
      <PanelResizeHandle
        style={{ width: "1rem", backgroundColor: "lightgreen" }}
      />
      <Panel style={panelStyles}>center</Panel>
      <PanelResizeHandle
        style={{ width: "1rem", backgroundColor: "lightgreen" }}
      />
      <Panel
        minSizePixels={200}
        maxSizePixels={200}
        style={panelStyles}
        collapsible
      >
        <div
          ref={ref}
          style={{ width: "100%", height: "100%", ...panelStyles }}
        >
          right
        </div>
      </Panel>
    </PanelGroup>
  );
}

export default App;
