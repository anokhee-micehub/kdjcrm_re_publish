/**
 * 범위슬라이더 탭 오픈, 클로즈
 */
$('.rangeTabOpen').click(function() {
  $(this).addClass('isActive');
});
$('.closeFilterBox').click(function() {
  $(this).parents('.rangeSlideTabBox').prev('.isActive').removeClass('isActive');
});

// 세 자리수 콤마
function comma(val) {
  return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * 범위 슬라이더
 * target : 지정할 슬라이더
 * min : 최소 값
 * max : 최대 값
 * minVal : 지정한 슬라이더 하위 min영역
 * maxVal : 지정한 슬라이더 하위 max영역
 * range : 범위 표시
 * values : 기본 값[min, max]
 * values[0] : min
 * values[1] : max
 */
function sliderRange(target, min, max) {
  const minVal = $(target).next().children('.amount-min');
  const maxVal = $(target).next().children('.amount-max');
  $(function() {
    $(target).slider({
      range: true,
      min: 0,
      max: max,
      values: [ min, max ],
      slide: function( event, ui ) {
        minVal.val(comma(ui.values[0]));
        maxVal.val(comma(ui.values[1]));
      }
    });
    minVal.val(comma($(target).slider("values", 0)));
    maxVal.val(comma($(target).slider("values", 1)));
  });
}
// 전시실 - 기회 성공률
sliderRange("#slider-range1", 1000, 100000000);
// 전시실 - 목표 금액
sliderRange("#slider-range2", 1000, 100000000);
// 회의실 - 기회 성공률
sliderRange("#slider-range3", 1000, 100000000);
// 회의실 - 목표 금액
sliderRange("#slider-range4", 1000, 100000000);