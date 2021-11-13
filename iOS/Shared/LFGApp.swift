//
//  LFGApp.swift
//  Shared
//
//  Created by matt on 11/11/21.
//

import SwiftUI


func lezgo() {
    DispatchQueue.main.asyncAfter(deadline: .now() + 10) {
        exit(0)
    }
}

func blurb() -> String {
    let poems: [String] = [
        "wolves never die",
        "many things never happen",
        "wolves happen to fall in love",
        "not everything is a big deal..."
    ]
    return poems.randomElement()!
}

@main
struct LFGApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .onAppear(perform: lezgo)
        }
    }
}
