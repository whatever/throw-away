//
//  ContentView.swift
//  Shared
//
//  Created by matt on 11/11/21.
//

import SwiftUI
import WebKit

// WebKit Web View (Full Screen)
// Identical to WKWebView - but ignore
class WKWebViewFullScreen: WKWebView {
    override var safeAreaInsets: UIEdgeInsets {
        return UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)
    }
}

// WebView
// WebView usable as part of a UI. Ignores Safe area.
struct WebView : UIViewRepresentable {
    let url: URL
    func makeUIView(context: Context) -> WKWebView {
        WKWebViewFullScreen()
    }
    func updateUIView(_ uiView: WKWebView, context: Context) {
        let url = Bundle.main.url(
            forResource: "index",
            withExtension: "html",
            subdirectory: "dist"
        )!
        uiView.loadFileURL(url, allowingReadAccessTo: url)
    }
}

struct ContentView: View {
    var webview = WebView(url: URL(string: "file://index.html")!)
    var body: some View {
        VStack {
            Text("what?").padding()
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(webview)
        .ignoresSafeArea()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
        .previewInterfaceOrientation(.portrait)
    }
}
