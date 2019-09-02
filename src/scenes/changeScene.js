export { addChangeSceneEventListeners };

function addChangeSceneEventListeners(that) {
  that.input.keyboard.on(
    "keydown_ZERO",
    function(event) {
      that.scene.start("Scene0");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_ONE",
    function(event) {
      that.scene.start("Scene1");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_TWO",
    function(event) {
      that.scene.start("Scene2");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_THREE",
    function(event) {
      that.scene.start("Scene3");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_FOUR",
    function(event) {
      that.scene.start("Scene4");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_FIVE",
    function(event) {
      that.scene.start("Scene5");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_SIX",
    function(event) {
      that.scene.start("Scene6");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_SEVEN",
    function(event) {
      that.scene.start("Scene7");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_EIGHT",
    function(event) {
      that.scene.start("Scene8");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_NINE",
    function(event) {
      that.scene.start("Scene9");
    },
    that
  );
  that.input.keyboard.on(
    "keydown_ESC",
    function(event) {
      that.scene.start("Boot");
    },
    that
  );
}
