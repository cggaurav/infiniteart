var zoom = function() {
	function z() {
		k = p.getContext("2d");
		l();
		A();
		s();
		t();
		setTimeout(function() {
			m || $("#status").css({
				opacity: "0.6"
			})
		}, 1E3)
	}

	function s() {
		m ? (u(), $("#status").animate({
			opacity: 0
		}, 1E3)) : setTimeout(function() {
			s()
		}, 10)
	}

	function l(a) {
		c = $(window).width();
		d = $(window).height();
		v = c / 2;
		w = d / 2;
		c > 1.5 * d ? (q = c, r = 0.75 * c) : (q = 1.5 * d, r = d);
		$("#zc").attr("width", c);
		$("#zc").attr("height", d)
	}

	function B() {
		n = 0;
		var a = steps.every(function(a) {
			a.ready && (n += 100 / steps.length);
			return a.ready
		});
		$("#loadbar").css("width",
			Math.floor(n) + "%");
		return a
	}

	function C(a) {
		var b = this;
		this.ready = !1;
		this.img = new Image;
		this.img.onload = function() {
			b.ready = !0;
			B() && (m = !0)
		};
		this.img.src = a
	}

	function A() {
		steps = [];
		steps.push(new C("http://raghavakk.com/images/artwork/collaborations1_l.jpg"));
		// for (var a = 0; 46 > a; a++) steps.push(new C(r[Math.floor(Math.random() * r.length)]));
		// for (var a = 0; 46 > a; a++) steps.push(new C("http://imgur.com/" + D[(20 + a) % 46] + ".jpg"))
		// for (var a = 0; 46 > a; a++) steps.push(new C("http://raghavakk.com/popimage.html?fromthesketchbook1_l.jpg"));

	}

	function t() {
		k.clearRect(0, 0, p.width, p.height);
		for (var a = [], e = 0; e < E; e++) a.push(steps[(Math.floor(b) + e) % steps.length]);
		for (var c = Math.pow(2, b % 1), e = 0; e < a.length; e++) {
			var d = v - q / 2 * c,
				f = w - r / 2 * c,
				g = q * c,
				l = r * c;
			a[e].ready ? k.drawImage(a[e].img, d, f, g, l) : (k.fillStyle =
				0 === (Math.floor(b) + e) % 2 ? F : G, k.fillRect(d, f, g, l));
			c *= 0.5
		}
		x || (a.every(function(a) {
			return a.ready
		}) && (y = n), h < y && (h += 0.5), $("#zc").css("opacity", h / 100), b = H + h / 2E3, m && ($("#zc").animate({
			opacity: 1
		}, 5 * (100 - h)), x = !0));
		setTimeout(function() {
			t()
		}, 1E3 / 60)
	}

	function u() {
		m && (f < I && (f += 1E-4), b = g.up ? b + 4 * f : g.down ? b - 4 * f : b + f, 0 > b && (b += steps.length), b > steps.length && (b -= steps.length));
		setTimeout(function() {
			u()
		}, 10)
	}
	var p = document.getElementById("zc"),
		k, c, d, v, w, q, r, H = 1,
		b = 1,
		g = {
			up: !1,
			down: !1
		}, I = 0.005,
		f = 0,
		E = 3,
		F = "#222",
		G = "#444",
		m = !1,
		n = 0,
		x = !1,
		h = 0,
		y = 0,
		D = "FUjD9hf gbHhxTR 8YyzJdR xP3aNkR 2Qi4fQr E6pW5Ky zmtWIBF Af7LtYp TuXy30d 3nKGLr2 hNoWscB mSBvv3K f4wJ70e mIt9XmM M4TkAyh P4L4qhd hNM6bTv VoT8JXM jqcGH0B DYVoN8n bOPQkOI NeaTfJ1 18ppMNr FZ3d8Jv HsoX2RP mjv4kzI 6rpJbef pySKauq WjNQYRV Ffooo8y Xei5XfD T5A415r LiV0VNB nGcwiO4 b1Gdjjy GE828iy eSQ7SLe 1mPyGgL GNtwJIr KxBlU7E aKXhms5 9Quu2wu Y07quDf r0yC5Qa 273fCkD 2wMyCUw FUjD9hf".split(" "),
		r = [];
		r.push("http://raghavakk.com/images/artwork/collaborations1_l.jpg");
		r.push("http://raghavakk.com/popimage.html?fromthesketchbook1_l.jpg");
		r.push("http://raghavakk.com/images/artwork/incoherent_collosal.jpg");
		r.push("http://raghavakk.com/popimage.html?popit1_l.jpg");
	$(window).resize(function() {
		l()
	});
	$(document).keydown(function(a) {
		38 === a.which && (g.up = !0,
			a.preventDefault());
		40 === a.which && (g.down = !0, a.preventDefault())
	});
	$(document).keyup(function(a) {
		38 === a.which && (g.up = !1, a.preventDefault());
		40 === a.which && (g.down = !1, a.preventDefault())
	});
	p.getContext && z()
}();