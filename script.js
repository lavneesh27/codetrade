$(document).ready(function () {
  // Buttons
  $("#request").hover(
    function () {
      $(this).css({
        backgroundColor: "white",
        color: "rgb(0, 75, 151)",
      });
    },
    function () {
      $(this).css({
        backgroundColor: "transparent",
        color: "white",
      });
    }
  );

  $("#hire").hover(
    function () {
      $(this).css({
        backgroundColor: "transparent",
        color: "rgb(0, 75, 151)",
        border: "2px solid rgb(0,75,151)",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      });
    },
    function () {
      $(this).css({
        backgroundColor: "rgb(0,75,151)",
        color: "white",
        boxShadow: "none",
      });
    }
  );

  $("#contact").hover(
    function () {
      $(this).css({
        backgroundColor: "white",
        color: "rgb(0, 75, 151)",
      });
    },
    function () {
      $(this).css({
        backgroundColor: "transparent",
        color: "white",
      });
    }
  );

  //

  $(function () {
    var nav = $("#container");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var arrow = $(".arrow");
      if (scroll >= 800) {
        nav.addClass("bcolor");
        arrow.fadeIn("fast");
      } else {
        nav.removeClass("bcolor");
        arrow.fadeOut("fast");
      }
    });
  });
  $(".arrow").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });

  ///////////////////////

  $("#touch1").on("mouseenter", () => {
    $(".dropdown-content").hide("fast");
    $("#myDropdown1").show("fast");
  });
  $(".dropdown-content").on("mouseleave", () => {
    $(".dropdown-content").hide("fast");
  });

  $(".nav-items").on("mouseleave", () => {
    $(".dropdown-content").hide("fast");
  });

  $("#touch2").on("mouseover", () => {
    $(".dropdown-content").hide("fast");
    $("#myDropdown2").show("fast");
  });

  $("#touch3").on("mouseover", () => {
    $(".dropdown-content").hide("fast");
    $("#myDropdown3").show("fast");
  });
  $("#touch4").on("mouseover", () => {
    $(".dropdown-content").hide("fast");
    $("#myDropdown4").show("fast");
  });
  $("#touch5").on("mouseover", () => {
    $(".dropdown-content").hide("fast");
    $("#myDropdown5").show("fast");
  });

  $(".chat").on("click", () => {
    $(".sub").toggle(100);
    $("#chat").toggle(100);
  });
});
